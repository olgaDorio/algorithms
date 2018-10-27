const prettyPrint = (object) => {
    console.log(JSON.stringify(object, null, '\t'));
};

const createNode = (value, left = null, right = null) => ({
    value,
    left,
    right,
});

const finalNode = createNode('i don\'t have any children :(');

const tree = createNode('root',
    createNode('left',
        createNode('left-1',
            createNode('left-1-1', finalNode, finalNode),
            createNode('left-1-2', finalNode, finalNode)),
        createNode('left-2',
            createNode('left-2-1', finalNode, finalNode),
            createNode('left-2-2', finalNode, finalNode))
    ),
    createNode('right',
        createNode('right-1',
            createNode('right-1-1', finalNode, finalNode),
            createNode('right-1-2', finalNode, finalNode)),
        createNode('right-2',
            createNode('right-2-1', finalNode, finalNode),
            createNode('right-2-2', finalNode, finalNode))
    )
);

const getOutput = (input) => {
    const output = [];

    const getValue = (object) => {
        output.push(object.value);

        if (object.left) {
            getValue(object.left);
        }

        if (object.right) {
            getValue(object.right)
        }
    };

    getValue(input);

    return output;
}

prettyPrint(tree);
prettyPrint(getOutput(tree));
