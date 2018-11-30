import { decorate, observable, action, computed } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    this.sellingPosts = null;
    this.sellingBrands = null;
    this.filteredBrands = null;
    this.theQuery = "";
    this.specificBrandPost = null;
    this.postDetail = null;
    this.latestPosts = null;
    this.mostViewed = null;
  }
  // GETS ALL THE POSTS IN THE DATABASE
  // getSellingPosts() {
  //   axios
  //     .get("http://192.168.1.35:8000/posts/")
  //     .then(res => (this.sellingPosts = res.data));
  // }
  // GETS ALL THE BRANDS AVAILABLE IN THE DATABASE
  getBrands() {
    axios.get("http://192.168.1.35:8000/selling/brands/").then(res => {
      this.sellingBrands = res.data;
      this.filteredBrands = res.data;
    });
  }

  // GETS THE POST RELATED TO A SPECIFIC CAR BRAND
  getBrandPost(id) {
    axios
      .get(`http://192.168.1.35:8000/brand/posts/` + id)
      .then(res => (this.specificBrandPost = res.data))
      .catch(err => console.error(err));
  }

  // GETS THE POST DETAIL
  getPostDetail(id) {
    const thePostDetail = this.specificBrandPost.find(
      posts => +posts.id === +id,

      // INCREASE THE NUMBER OF HOW MANY TIMES THE POST HAVE BEEN WATCHED
      axios
        .post(`http://192.168.1.35:8000/post/views/` + id)
        .then(() => console.log("DONE"))
    );
    return thePostDetail;
  }

  // GETS THE LATEST 5 POSTS
  getLatestPosts() {
    axios
      .get("http://192.168.1.35:8000/latest/posts/")
      .then(res => (this.latestPosts = res.data))
      .catch(err => console.error(err));
  }

  getMostViewed() {
    axios
      .get("http://192.168.1.35:8000/most/viewed/posts/")
      .then(res => (this.mostViewed = res.data))
      .catch(err => console.error(err));
  }

  // #####################################SEARCH BRANDS##########################################
  onSearchBrandChangeHandler(e) {
    const list = this.sellingBrands.filter(brand =>
      brand.name.toLowerCase().includes(e)
    );
    this.filteredBrands = list;
  }
  changeBrandValue(e) {
    this.theQuery = e.toLowerCase();
    this.onSearchBrandChangeHandler(this.theQuery);
  }
}

decorate(Store, {
  // getSellingPosts: action,
  sellingPosts: observable,
  sellingBrands: observable,
  theQuery: observable,
  filteredBrands: observable,
  onSearchBrandChangeHandler: action,
  changeBrandValue: action,
  specificBrandPost: observable,
  getBrandPost: action,
  postDetail: observable,
  getPostDetail: action,
  latestPosts: observable,
  mostViewed: observable,
  getLatestPosts: action,
  getMostViewed: action
});

const store = new Store();
store.getLatestPosts();
store.getMostViewed();
store.getBrands();

export default store;
