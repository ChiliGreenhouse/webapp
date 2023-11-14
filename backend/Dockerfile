FROM rust:latest as build

WORKDIR /greenhouse_backend

# create a new empty shell project
RUN USER=root cargo init .

# build empty project to cache dependencies
COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml

RUN cargo build --release
RUN rm src/*.rs

# now build with actual source code
COPY ./src ./src

RUN rm ./target/release/deps/greenhouse_backend*
RUN cargo build --release

# the final base image
FROM rust:latest

# copy the build artifact from the build stage
COPY --from=build /greenhouse_backend/target/release/greenhouse-backend .

# expose ports and set entrypoint
EXPOSE 8080
ENTRYPOINT ["./greenhouse-backend"]