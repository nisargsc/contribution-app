export default async function zkp(pan){
    try{
        const body = JSON.stringify({
            pan: getPAN(pan).toString()
        })
        console.log(body)
        const res = await fetch('/api/getY', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: body
          })
        const res_json = await res.json()
        console.log(res_json)

        try {
            const body1 = JSON.stringify(res_json)
            console.log(body1)
            const res1 = await fetch('http://127.0.0.1:5000/zkp_y', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: body
              })
            const res_json11 = await res1.json()
            console.log(res_json11)

            try {

                // console.log("<<<<<<")
                // console.log(res_json)
                let y = res_json.y
                let h = res_json.h
                let r = res_json.r
                let g = res_json.g
                let P = res_json.P
                let s = BigInt(res_json11.b)
                s = s*BigInt(getPAN(pan)) + BigInt(res_json.r)
                s = s % BigInt(BigInt(res_json.P)-1n)
                console.log(s)
                const body = JSON.stringify({
                    y: y,
                    h: h,
                    r: r,
                    g: g,
                    P: P,
                    s: s.toString(),
                })
                console.log(body)
                const res1 = await fetch('http://127.0.0.1:5000/zkp_s', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: body
                  })
                const res_json1 = await res1.json()
                console.log(res_json1)
            }catch(e){
                console.log(e)
            }
        }catch(e){
            console.log("error from zkp_y")
            console.log(e)
        }        
    }catch(e){
        console.log(e)
    }
}

function getPAN(pan) {
    let ans = 0
    let place = 1
    const pan_l = pan .length
    for (var i = 0; i < pan_l; i++) {
        ans = ans + pan.charCodeAt(i)*Math.pow(10, place)
        place = place + 1
    }
    return ans
}