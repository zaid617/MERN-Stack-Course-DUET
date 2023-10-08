export default function Students() {

    let StudentsArr = [ 

        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zayan"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "zaman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},
        {name: "usman"},

    ]

  return (
    <div >
        <h1>students</h1>
        {
            StudentsArr.map((student , i)=>(
                <div key={i} style={{ width:"100%", color:"black", border:"1px solid black" , margin:"2px"}}>
                    <p>Name: {student.name}</p>
                </div>
            ))
        }
    </div>
  )
}
