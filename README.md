Errors

validation for categories to fill in all data and not chose same category

Flash messages
Readme 

delete user

extract category image

Make categories and recipes unique to person


Flash and preferences**



heroku create jcgould-title

git push herouk master

<% for( let i = 0; i < categories.length; i++ ) { %>
                    <% if (categories[i].owner=user._id) { %>
                     
                    
                  <li style="list-style:none">
                    <a href="/api/main/category-recipes/<%= categories[i]._id%>"
                      style="text-decoration:none;"> <%= categories[i].name %> </a>
                  </li>
                  <% } %>
                  <% } %> 