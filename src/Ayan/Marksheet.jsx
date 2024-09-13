import React, { Component } from "react";

export default class Marksheet extends Component {

    constructor() {
        super();
        this.state = {
            info: []
        }

        this.sName = React.createRef();
        this.dName = React.createRef();
        this.pMark = React.createRef();
        this.cMark = React.createRef();
        this.bMark = React.createRef();
    }

    AddResult = (e) => {
        let tMark = parseInt(this.cMark.current.value) + parseInt(this.pMark.current.value) + parseInt(this.bMark.current.value)
        let result = { sn: this.sName.current.value, dp: this.dName.current.value, total: tMark };
        this.setState({ info: [...this.state.info, result] });
        this.sName.current.value = "";
        this.dName.current.value = "";
        this.pMark.current.value = "";
        this.cMark.current.value = "";
        this.bMark.current.value = "";
    }

    delete = (uid,e) => {
        this.state.info.splice(uid, 1);
        this.setState({ data: this.state.info });
    }


    render() {
        return (
            <>
                Student Name : <input type="text" ref={this.sName} ></input><br /><br />
                Department : <input type="text" ref={this.dName} /><br /><br />
                Physics Marks : <input type="number" ref={this.pMark} />
                chemistry Marks : <input type="number" ref={this.cMark} />
                Biology Marks : <input type="number" ref={this.bMark} /><br /><br />
                <button onClick={this.AddResult}>Add Result</button><br /><br />

                <table align="center" border="1">
                    <thead>
                        <th>Name</th>
                        <th>Dept</th>
                        <th>Total Marks</th>
                        <th>Action</th>
                    </thead>

                    {
                        this.state.info.map((val, index) => {
                            return <tr key={index}>
                                <td>{val.sn}</td>
                                <td>{val.dp}</td>
                                <td>{val.total}</td>
                                <td><button onClick={()=> {this.delete(index)}}>Delete</button></td>
                            </tr>
                        })
                    }
                </table>
            </>
        )
    }
}