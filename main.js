function moveKnight(from, toward) {
    const possibleMoves = [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1]
    ];

    function isCoordinateValid(x, y) {
        return x >= 0 && y >= 0 && x < 8 && y < 8;
    }

    const list = [];
    const passedPoints = new Set();

    list.push({ position: from, direction: [from]});
    passedPoints.add(`${from[0]}, ${from[1]}`);

    while (list.length > 0) {
        const presentPosition = list.shift();
        const [x,y] = presentPosition.position;

        if (x === toward[0] && y === toward[1]) {
            console.log('Found the shortest path');

            for (let point of presentPosition.direction) {
                console.log(point);
            }
            return presentPosition.direction;
        }

        for (let move of possibleMoves) {
            const newX =x + move[0];
            const newY = y + move[1];
            const marker = `${newX}, ${newY}`;

            if (isCoordinateValid(newX, newY) && !passedPoints.has(marker)) {
                list.push(
                    {
                        position: [newX, newY],
                        direction: [...presentPosition.direction, [newX, newY]]
                    }
                );
            }
        }
    }
}

moveKnight([0, 0], [7, 7]);
// Test example to check if the code provides the correct result.