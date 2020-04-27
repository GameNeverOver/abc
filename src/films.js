import React, { useState, useEffect }  from 'react';
import { connect } from "react-redux";

function Demo({ list, getFilmList }) {
    useEffect(() => {
        console.log(list)
    });
    return (
        <div onClick = {()=>{
            getFilmList()
        }}>
            123
        </div>
    )
};

const mapStateToProps = state => (
    { list: state.filmList }
)
const mapDispatchToProps = dispatch => ({ 
    getFilmList: () => dispatch (
        fetch(
            '/v2/movie/top250'
        ).then(res => res.json())
        .then(res => {
            dispatch({
                type: 'a',
                payload: ['1']
            })
            return dispatch({
                type: 'RANK',
                payload: [...res.subjects]
            })
        }
        ).catch(
        )
    )
})
          
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo)
