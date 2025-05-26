import PropTypes from 'prop-types';
function SubComponent({str,num,boolean,obj,arr,func}){
    return (
        <>
            <p>{str}</p>
            <p>{num}</p>
            <p>{boolean.toString()}</p>
            <p>{JSON.stringify(obj)}</p>
            <p>{arr.toString()}</p>
            <p>{func}</p>
        </>
    )
}

SubComponent.PropTypes = {
    str:PropTypes.string,
    num:PropTypes.number,
    boolean:PropTypes.boolean,
    obj:PropTypes.object,
    arr:PropTypes.array,
    func:PropTypes.func
}

export default SubComponent;