import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Recommend.scss';
class Recommend extends Component {
    render() {
        return (
            <div className='recommend-container'>
                <div className='title'>推荐</div>
                <ul className='app-list'>
                    {
                        this.props.recommendList.map((item,index)=>{
                            return(
                                <li className='app-item' key={index}>
                                    <img className='app-icon' src={item['im:image'][0].label} alt="" />
                                    <div className='app-name'>{item['im:name'].label}</div>
                                    <div className='app-categray'>{item.category.attributes.label}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

// 将state属性映射到props上
const mapStateToProps = (state) => ({
    recommendList: state.recommendList || []
})
  
export default connect(mapStateToProps)(Recommend);