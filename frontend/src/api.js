import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "http://localhost:3001/api";

export default class api {
  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async fetchPosts() {
    let res = await this.request(`posts`);
    return res;
  }

  static async getPost(postId) {
    let res = await this.request(`posts/${postId}`);
    return res;
  }

  static async addPost(data) {
    let res = await this.request(`posts`, data, "post");
    return res;
  }

  static async editPost(id, data) {
    let res = await this.request(`posts/${id}`, data, "put");
    return res;
  }

  static async deletePost(id) {
    let res = await this.request(`posts/${id}`, {}, "delete");
    return res;
  }

  // static async addPost(data) {
  //   let res = await this.request(`posts`, data, "post");
  //   return res;
  // }
  // static async addPost(data) {
  //   let res = await this.request(`posts`, data, "post");
  //   return res;
  // }
}
