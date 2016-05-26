# Quotes

> A server-side rendering sample that reads & writes to a JSON file

This is a small sample app I briefly showed during our lecture this morning that has a simple form that saves quotes to a JSON file on the server. Another route (`/list`) shows the currently saved quotes. 

This uses `express-handlebars` for templating and `body-parser` to extract the quotes out of the HTTP POST from the form.

This is ready for deployment to Heroku, but the quotes will disappear after 30 minutes or so when the app recycles.
