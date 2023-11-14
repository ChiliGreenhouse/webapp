use actix_web::{App, Error, web};
use actix_web::dev::{ServiceFactory, ServiceRequest};
use actix_web::web::ServiceConfig;

/// A shortcut for registering a configure function with a specific scope in a more readable way.
/// # Usage
/// ```no_run
/// // conventional method
/// my_app.service(web::scope("my_scope").configure(my_configure_fn))`
///
/// // using configure_scope
/// my_app.configure_scope("my_scope", my_configure_fn)
/// ```
pub trait ConfigureScope: Sized {
    fn configure_scope<F>(self, scope: &str, factory: F) -> Self
        where
            F: FnOnce(&mut ServiceConfig);
}

impl<T> ConfigureScope for App<T>
    where
        T: ServiceFactory<ServiceRequest, Config=(), Error=Error, InitError=()>,
{
    fn configure_scope<F>(self, scope: &str, configure_fn: F) -> Self
        where
            F: FnOnce(&mut ServiceConfig),
    {
        self.service(web::scope(scope).configure(configure_fn))
    }
}
