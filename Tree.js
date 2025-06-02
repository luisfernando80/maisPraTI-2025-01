class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value)
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)
    }

    traverseDFS(callback) {
        function recurse(node) {
            callback(node)
            node.children.forEach(child => recurse(child));
        }

        recurse(this.root)
    }
}

//Raiz
const tree = new Tree('A')

//Nós
const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')
const G = new TreeNode('G')
const H = new TreeNode('H')

tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

B.addChild(E)
B.addChild(F)

C.addChild(G)

F.addChild(H)

function printNode(node) {
    console.log(node.value)
}

function printTree(node, prefix = '', isLast = true) {
    console.log(prefix + (isLast ? '└── ' : '├── ') + node.value)

    const childrenCount = node.children.length

    node.children.forEach((child, index) => {
        const isLastChild = index === childrenCount - 1
        const newPrefix = prefix + (isLast ? '    ' : '│   ')
        printTree(child, newPrefix, isLastChild)
    })
}

printTree(tree.root)
// tree.traverseDFS(printNode)

