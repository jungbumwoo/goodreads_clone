/**
 * import express from "express";
import proxy from "http-proxy-middleware";

module.exports = function(app) {
    app.use(
        proxy("/", {
            target: "",
            changeOrigin: true
        })
    );
}
 */