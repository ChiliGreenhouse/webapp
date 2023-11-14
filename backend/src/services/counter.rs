use std::sync::Mutex;

use actix_web::web::Data;
use actix_web::{get, web, HttpResponse, Responder};

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(get).service(increment).service(decrement);
}

#[get("")]
pub async fn get(data: Data<Mutex<i32>>) -> impl Responder {
    let counter = data.lock().unwrap();
    HttpResponse::Ok().body(counter.to_string())
}

#[get("/decrement")]
pub async fn decrement(data: Data<Mutex<i32>>) -> impl Responder {
    let new_counter = add_counter(&data, -1);

    HttpResponse::Ok().body(new_counter.to_string())
}

#[get("/increment")]
pub async fn increment(data: Data<Mutex<i32>>) -> impl Responder {
    let new_counter = add_counter(&data, 1);

    HttpResponse::Ok().body(new_counter.to_string())
}

pub fn add_counter(data: &Data<Mutex<i32>>, value: i32) -> i32 {
    let mut counter = data.lock().unwrap();
    *counter += value;
    *counter
}
