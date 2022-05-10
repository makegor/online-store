import { Data } from "./data_json";
import reviews from "./reviews.json";

if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify([...Data]));
}
const localData = localStorage.getItem('data');
const data = JSON.parse(localData);

export const API = {

    getContent(seconds, sexId, currentPage, pageSize) {
        if (!localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify([...Data]));
        }
        const localData = localStorage.getItem('data');
        const data = JSON.parse(localData);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let data_u = [];
                if (sexId === undefined) {
                    data_u.data = data.filter((d, index) => (currentPage * pageSize > index) && (index >= (currentPage - 1) * pageSize))
                    data_u.totalCount = data.length;
                }
                else {
                    data_u.data = data.filter(d => d.sex === sexId);
                    data_u.totalCount = data_u.data.length;
                    data_u.data = data_u.data.filter((d, index) => (currentPage * pageSize > index) && (index >= (currentPage - 1) * pageSize))
                }
                resolve(data_u)
            }, seconds * 1000)
        })
    },

    addProduct(ID) {
        return new Promise((resolve) => {
            setTimeout(() => {
                data[ID - 1].added = true;
                data[ID - 1].summ = 1;
                localStorage.setItem('data', JSON.stringify(data));
                const resultCode = 0;
                resolve(resultCode)
            }, 1000)
        })
    },

    deleteProduct(seconds, ID) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data[ID - 1].added = false;
                data[ID - 1].summ = 0;
                localStorage.setItem('data', JSON.stringify(data));
                const resultCode = 0;
                resolve(resultCode)
            }, seconds * 1000)
        })
    },

    plusProduct(seconds, ID) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data[ID - 1].summ++;
                localStorage.setItem('data', JSON.stringify(data));
                const resultCode = 0;
                resolve(resultCode)
            }, seconds * 1000)
        })
    },

    minusProduct(seconds, ID) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data[ID - 1].summ > 0) {
                    data[ID - 1].summ--;
                    localStorage.setItem('data', JSON.stringify(data));
                }
                if (data[ID - 1].summ <= 0) {
                    data[ID - 1].added = false;
                    data[ID - 1].summ = 0;
                    localStorage.setItem('data', JSON.stringify(data));
                }
                const resultCode = 0;
                resolve(resultCode)
            }, seconds * 1000)
        })
    },

    getProduct(seconds, id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(JSON.parse(localStorage.getItem('data')).filter(product => (product.id === id))[0]);
            }, seconds * 1000)
        })
    },

    getReviews(seconds, id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!localStorage.getItem('reviews')) {
                    localStorage.setItem('reviews', JSON.stringify(reviews));
                }
                resolve(JSON.parse(localStorage.getItem('reviews')));
            }, seconds * 1000)
        })
    },

    sendReviews(seconds, reviews) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                localStorage.setItem('reviews', JSON.stringify(reviews));
            }, seconds * 1000)
        })
    },

    getBasket(seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = [];
                if (localStorage.getItem('data')) {
                    response.push(JSON.parse(localStorage.getItem('data')).filter(product => product.summ > 0));
                }
                response.push([]);
                resolve(response[0]);
            }, seconds * 1000)
        })
    },

    buyProduct(seconds, purchasedProduct) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!localStorage.getItem('order')) {
                    localStorage.setItem('order', JSON.stringify([]));
                }
                const order = JSON.parse(localStorage.getItem('order'));
                const orderNumber = Math.floor(Math.random() * 5000);
                order.push({ orderNumber, purchasedProduct });
                localStorage.setItem('order', JSON.stringify(order));
                localStorage.removeItem('data');
                resolve(orderNumber)
            }, seconds * 1000)
        })
    },

    emptyTrash(seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                localStorage.removeItem('data');
                resolve()
            }, seconds * 1000)
        })
    },

    getIsAuth(seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isAuth = [];
                if (localStorage.getItem('auth')) {
                    isAuth.push(true)
                }
                else {
                    isAuth.push(false)
                }
                resolve(isAuth[0]);
            }, seconds * 1000)
        })
    },

    me(seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = [];
                if (localStorage.getItem('auth')) {
                    const data = JSON.parse(localStorage.getItem('auth'));
                    const resultCode = 0;
                    response.push({ resultCode, data });
                }
                else {
                    const resultCode = 1;
                    response.push({ resultCode });
                }
                resolve(response[0]);
            }, seconds * 1000)
        })
    },

    login(seconds, email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = [];
                localStorage.setItem('auth', JSON.stringify({ email, password }));
                if (localStorage.getItem('auth')) {
                    const resultCode = 0;
                    response.push({ resultCode });
                }
                else {
                    const resultCode = 1;
                    response.push({ resultCode, messages: "" });
                }
                resolve(response[0]);
            }, seconds * 1000)
        })
    },

    logout(seconds) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = [];
                localStorage.removeItem('auth');
                const resultCode = 0;
                response.push({ resultCode });
                resolve(response[0])
            }, seconds * 1000)
        })
        return promise;
    }

}