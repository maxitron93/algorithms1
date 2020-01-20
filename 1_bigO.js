const nemo = new Array(20000000).fill(1)
nemo.push('nemo')

const findNemo = (arr) => {
    let t0 = process.hrtime.bigint()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'nemo') {
            console.log('Found Nemo:', i)
        }
    }
    let t1 = process.hrtime.bigint()
    console.log(`Call to find nemo took ${Number(t1 - t0) / 1000000}ms`)
}

findNemo(nemo)
