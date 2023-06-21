var footer_contact = document.getElementById("footer-contact")
var post_table_div = document.getElementById("post-table")
var admins_count = 1
var linkedinacount = null
var email = null
var footer_description = null
var post_tables = ['test1', 'test2']
var posts = []

function addPostTable(title, posts) {
    post_tables.push(title)
}
function setEmail(youremail) {
    email = youremail
}


var update_index = 0
function update(){
    if (admins_count <= 1){
        footer_contact.innerHTML = "<div class='w3-row'><h2 class='w3-wide'>Contact Me</h2>"+ footer_description +"<p>Email: "
        if(email != null){
            footer_contact.innerHTML = footer_contact.innerHTML + "<b>"+ email +"</b></p>"
        }
        if (linkedinacount != null) {
            footer_contact.innerHTML = footer_contact.innerHTML + "<a href='"+ linkedinacount +"'><img src='' alt='Linkedin'></a></div>"
        }
    }else if(admins_count >= 1){
        footer_contact.innerHTML = "<div class='w3-row'><h2 class='w3-wide'>Contact Us</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos odio aspernatur et nihil explicabo dolore aliquam a veniam assumenda voluptatibus, ut dolorem accusantium excepturi earum reprehenderit provident, est nesciunt. Laboriosam.</p><p>Email: <b>amirmohammadmehdipour7@gmail.com</b></p>"
        if(email != null){
            footer_contact.innerHTML = footer_contact.innerHTML + "<b>"+ email +"</b></p>"
        }
        if (linkedinacount != null) {
            footer_contact.innerHTML = footer_contact.innerHTML + "<a href='"+ linkedinacount +"'><img src='' alt='Linkedin'></a></div>"
        }
    }
    update_index += 1
    if (update_index <= post_tables.length) {
        post_table_div.innerHTML = post_table_div.innerHTML + "<h1>" + post_tables[update_index - 1] + "</h1>"
    }
    if(update_index <= 1){
        setTimeout(update, 1)
    }else{
        setTimeout(update, 3000)
    }
}
update()
