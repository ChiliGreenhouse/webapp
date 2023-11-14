use actix_web::http::StatusCode;
use actix_web::{HttpResponse, Responder};

pub async fn not_found() -> impl Responder {
    HttpResponse::Ok()
        .status(StatusCode::NOT_FOUND)
        .body("Site not found! Note: The API is available at /api/*")
}
