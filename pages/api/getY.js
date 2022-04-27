import { generatePrimeSync } from "crypto";


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const { pan } = req.body
    const pan_int = pan
    const P = genPrime()
    const g = getGenerator()
    const r = P - 100n
    
    // console.log("The P is: ")
    // console.log(P)
    
    // console.log("The g is: ")
    // console.log(BigInt(g))
    
    // console.log("The r is: ")
    // console.log(BigInt(r))
    // console.log(">>")

    const y = pow_mod(BigInt(g), BigInt(pan_int), P)
    const h = pow_mod(BigInt(g), BigInt(r), P)
    // console.log("H is ")
    // console.log(h)
    


    res.status(200).json({ y: y.toString(), h: h.toString(), r: r.toString(), P: P.toString(), g: g.toString() })
}



function genPrime() {
    const prime = generatePrimeSync(16, {bigint: true})
    return prime + 100n
}

// function genR(P) {
//     const prime = BigInt(Math.floor(Math.random()))
//     return prime
// }

function getGenerator() {
    return BigInt(Math.floor(Math.random()*20)) + 1n
}

function pow_mod(x, y, p)
{
    let res = 1n;

	x = x % p;
	while (y > 0n)
	{
		if (y & 1n) res = (res*x) % p;

		y = y/2n;
		x = (x*x) % p;
	}
	return res;
}