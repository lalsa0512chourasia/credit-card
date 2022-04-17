import React, {  useState } from "react";
import './Style.css'

const CardHolder = () => {

    // const [num, setNum] = useState([
    //     { num1:"" },{num2:""},{num3:""}
    // ])
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    const [data] = useState([])
    let [displaynumber, setDisplaynum] = useState(false)


    // useEffect(() => {
    //     names()
    // }, [])

    // const names = async () => {
    //     const response = await fetch('http://localhost:4000/api/v1/cardhold')
    //     setData(await response.json())
    // }

    const setDigit = (e) => {
        if (e.keyCode === 13) {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1].focus();
            //    controls.current =  controls.current
        }

        //     var val = (this).val();
        //     var newval = '';
        //     val = val.replace(/\s/g, '');
        //     for(var i=0; i < val.length; i++) {
        //         if(i%4 === 0 && i > 0) newval = newval.concat(' ');
        //         newval = newval.concat(val[i]);
        //     }
        //     (this).val(newval);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalnum =  num1 + num2 + num3 + num4;
        setDisplaynum(displaynumber = true)
        setDisplaynum(...totalnum, totalnum + 1)
        data.push(totalnum)
        console.log(totalnum)

    }

    return (
        <>
            <div>
                {/* { console.log(num)} */}
                <form>
                    <div className="container">
                        <label>Card Number*  </label>
                        <input type='text' maxLength='4' name="card" id="name1" value={num1} onChange={(e) => setNum1(e.target.value)} onKeyDown={setDigit} required />  <br /><br />

                        <input type='text' maxLength='4' name='card' id="name2" value={num2} onChange={(e) => setNum2(e.target.value)} onKeyDown={setDigit} required /><br /><br />
                        <input type='text' maxLength='4' name="card" id="name3" value={num3} onChange={(e) => setNum3(e.target.value)} onKeyDown={setDigit} required />  <br /><br />
                        <input type='text' maxLength='4' name="card" id="name4" value={num4} onChange={(e) => setNum4(e.target.value)} onKeyDown={setDigit} required />  <br /><br />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                {displaynumber ? <>{data.map((ele, i) => (
                    <div key={i} className="shownum">{num1 + num2 + num3}</div>
                ))} </> : ""}
            </div>

        </>
    )
}
export default CardHolder;