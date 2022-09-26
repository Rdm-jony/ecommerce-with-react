const AddToLs = id => {
    let user = {};
    user = JSON.parse(localStorage.getItem("users"));
    if (!user) {
        user = {};
    }

    let quantity = user[id];
    if (quantity) {
        let newQuautity = quantity + 1;
        user[id] = newQuautity;
    }
    else {
        user[id] = 1;
    }
    localStorage.setItem("users", JSON.stringify(user));
}

const GetLocalStorage = () => {
    let user = {};
    user = JSON.parse(localStorage.getItem("users"));
    if (!user) {
        user = {};
    }
    return user;
}

const RemoveToLs = id => {
    let user;
    user = JSON.parse(localStorage.getItem("users"));
    if (user) {
        if (id in user) {
            delete user[id];
        }
        localStorage.setItem("users", JSON.stringify(user));
    }
}

const getTotalPrice = products => {
    const total = products.reduce((previous, current) => previous + parseFloat(current.price), 0);
    return total;
}
export { RemoveToLs, AddToLs, getTotalPrice as getTotal, GetLocalStorage }