const gplResponse = {
    data: {
        getUser: {
            id: "u1",
            posts: {
                edges: [
                    { node: { title: "post 1", likes: 10 } },
                    { node: { title: "post 2", likes: 20 } }
                ]
            }
        }
    }
}



let {
    data: {
        getUser: {
            id,
            posts: {
                edges: [{
                    node: { title: title1, likes: likes1 },
                    node: { title: title2, likes: likes2 }
                }]
            }
        }
    }
} = gplResponse;

console.log(title1);