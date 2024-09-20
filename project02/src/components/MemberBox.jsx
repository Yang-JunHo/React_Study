// rafce치고 엔터하면 바로나옴

const MemberBox = ({memberName, teamName}) => {
    // Case 1) 매개변수 props => props.name
    // Case 2) 객체 비구조화 할당 {속성이름} => 속성이름
    
    // console.log('props 안에 있는 값은', props);
    
    return (
        <div style={{ border: '1px solid black', margin: '2%', padding: '2%' }}>
            <h2>{teamName}</h2>
            <p>{memberName}</p>
        </div>
    )
}

export default MemberBox