import axios from "axios";

const actions = {
    async fetchUsers({ commit }) {
        const res = await axios.get('https://dummyjson.com/users')
        console.log(res);
        commit('SET_USERS', res.data.users)
        return res
    },
    async fetchProducts({ commit }) {
        const res = await axios.get('https://dummyjson.com/products')
        console.log(res);
        commit('SET_PRODUCTS', res.data.products)
        return res
    },
}
  
export default actions