require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require('./master').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://unclefixer.com')
        .save('./public/sitemap.xml')
);
