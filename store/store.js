import { decorate, observable, action, computed } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    this.sellingPosts = null;
    this.sellingBrands = null;
    this.filteredBrands = null;
    this.theQuery = "";
    this.specificBrandPost = {};
  }
  // GETS ALL THE POSTS IN THE DATABASE
  // getSellingPosts() {
  //   axios
  //     .get("http://127.0.0.1:8000/posts/")
  //     .then(res => (this.sellingPosts = res.data));
  // }
  // GETS ALL THE BRANDS AVAILABLE IN THE DATABASE
  getBrands() {
    axios.get("http://127.0.0.1:8000/selling/brands/").then(res => {
      this.sellingBrands = res.data;
      this.filteredBrands = res.data;
    });
  }

  // GETS THE POST RELATED TO A SPECIFIC CAR BRAND
  getBrandPost(id) {
    const brandPost = this.sellingBrands.find(posts => +posts.id === +id);
    this.specificBrandPost = brandPost;
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
  getBrandPost: action
});

const store = new Store();
// store.getSellingPosts();
store.getBrands();

export default store;
