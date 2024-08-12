function expo(num, exp, callback) {
   
    if (exp === 0) {
        return callback(1);
    }

   
    if (exp === 1) {
        return callback(num);
    }

  
    return expo(num, exp - 1, function(result) {
        return callback(num * result);
    });
}

expo(5, 3, function(result) {
    console.log(result); 
});



// davaleba2

function fetchAndDisplayPosts() {
   
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) 
        .then(data => {
            
            const postsContainer = document.getElementById('posts');

           
            data.forEach(post => {
              
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                
                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;

           
                const bodyElement = document.createElement('p');
                bodyElement.textContent = post.body;

                
                postDiv.appendChild(titleElement);
                postDiv.appendChild(bodyElement);

               
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}


fetchAndDisplayPosts();




// davaleba 3




function deepCopyAsync(obj) {
    return new Promise((resolve, reject) => {
        
        if (typeof obj !== 'object' || obj === null) {
           
            return reject(new Error('Argument is not an object'));
        }

       
        const copy = JSON.parse(JSON.stringify(obj));

     
        resolve(copy);
    });
}


const originalObject = {
    name: "mamuka",
    age: 30,
    address: {
        street: "broliketis N12",
        city: "broliketi"
    }
};

deepCopyAsync(originalObject)
    .then(copiedObject => {
        console.log("Original Object:", originalObject);
        console.log("Copied Object:", copiedObject);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

