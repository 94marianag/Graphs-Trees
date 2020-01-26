function BinaryNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function Tree(root) {
    this.root = root;
}
var tree = new Tree;
Tree.prototype.insert = function (value) {
    if (this.root == null) {
        this.root = new BinaryNode(value);
    }
    else {
        var tmp = this.root;
        while (tmp != null) {
            if (value > tmp.value) {
                if (tmp.right == null) {
                    tmp.right = new BinaryNode(value);
                    break;
                }
                else {
                    tmp = tmp.right;
                }
            }
            if (tmp.left == null) {
                tmp.left = new BinaryNode(value);
                break;
            }
            else {
                tmp = tmp.left;
            }
        }
    }
}
tree.insert(6);
tree.insert(3);
console.log(tree);
Tree.prototype.search = function(value){
    var temp = root.value;
    while(temp =! null){
        if(value == temp){
            return value;
        }
        else if(value > temp){
            tree.search(root.right);
        }
        else{
            tree.search(root.left);
        }
    }
}
console.log(tree.search(6));