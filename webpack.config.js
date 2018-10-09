const HtmlWebPackPlugin = require("html-webpack-plugin");
const craigslist = require('node-craigslist');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
   devServer: {
    before: function(app) {
      app.get('/craigslist/search', function(req, res) {
        // Search craigslist with url query
        const client = new craigslist.Client({
          baseHost : 'craigslist.com',
          city : 'Boston'
        });
        // options, query
        client.search(req.query, req.query.keywords)
          .then(listings => {
            res.json(listings);
          })
          .catch(err => console.error(err));
      });
    }
  }
};