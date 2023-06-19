console.log("this is plugins sample.");
import * as $ from "./jquery";
import * as R from "./ramda";
import * as _ from "./lodash";

$("body").css("background", "#009");
console.log("R", R.add(2, 3));
console.log("_", _.join(["a", "b", "c"], "~"));
