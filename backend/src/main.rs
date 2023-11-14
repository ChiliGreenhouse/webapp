use std::net::Ipv4Addr;
use std::sync::Mutex;

use actix_cors::Cors;
use actix_web::{App, HttpResponse, HttpServer, web};
use actix_web::http::StatusCode;
use actix_web::web::Data;

use crate::actix_util::ConfigureScope;
use crate::services::counter;
use crate::services::not_found::not_found;

mod actix_util;
mod services;

#[cfg(debug_assertions)]
const IP: Ipv4Addr = Ipv4Addr::LOCALHOST;
#[cfg(not(debug_assertions))]
const IP: Ipv4Addr = Ipv4Addr::UNSPECIFIED;

const PORT: u16 = 8080;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let app_data = Data::new(Mutex::new(0));

    let app = move || {
        App::new().wrap(Cors::permissive())
            .app_data(Data::clone(&app_data))
            .default_service(web::to(not_found))
            .configure_scope("/api/counter", counter::configure)
    };

    let server = HttpServer::new(app).bind((IP, PORT))?;
    server
        .addrs()
        .iter()
        .for_each(|addr| println!("Server running on {addr}"));

    server.run().await
}