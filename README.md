<% recipe.forEach(({title,description,image}) =>{%>
            <div class="col-md-4" style="width:20rem;">
              <div class="card">
                <img
                src="<%= image %> "
                class="card-img-top"
                alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title"><%= title %> </h5>
                  <p class="card-text">
                    <%= description %> 
                  </p>
                </div>
              </div>
            </div>   
            <%})%> 