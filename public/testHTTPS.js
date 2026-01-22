async function getUsers() {
    try{
        let res = await fetch ("../api/users");
        console.log(res.ok);
        if (!res.ok) {
            throw new Error("ruh roh get out of here");
        }
        let theJson = await res.json();
        console.log(res);
        console.log(theJson);
    }
    catch(error) {
        console.error(error.message);
    }
}

getUsers();
