import {Table} from 'reactstrap';
const AllAccountInfo=()=>{
    const accs = [
            {id:'10001',name:'홍길동',balance:100000,type:'일반계좌',grade:''},
            {id:'10002',name:'송길동',balance:200000,type:'특수계좌',grade:'VIP'},
            {id:'10003',name:'하길동',balance:300000,type:'일반계좌',grade:''},
            {id:'10004',name:'구길동',balance:400000,type:'특수계좌',grade:'Gold'},
            {id:'10005',name:'차길동',balance:500000,type:'특수계좌',grade:'Silver'},
        ];
        return(
            <div className="route">
                <h4>전체 계좌 조회</h4>
                <Table bordered style={{width:'800px', margin:'0 auto'}}>
                    <tbody>
                        <tr><th>계좌번호</th><th>이름</th><th>잔액</th><th>종류</th><th>등급</th></tr>
                        {
                            accs.map(acc=>
                                (<tr key={acc.id}>
                                    <td>{acc.id}</td>
                                    <td>{acc.name}</td>
                                    <td>{acc.balance}</td>
                                    <td>{acc.type}</td>
                                    <td>{acc.grade}</td>
                                </tr>)
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
}
export default AllAccountInfo;