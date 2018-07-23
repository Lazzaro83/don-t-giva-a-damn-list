import Rebase from "re-base";
import firebase from "firebase";

const config = {
  // you should put your own firebase authentication params here
};
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
