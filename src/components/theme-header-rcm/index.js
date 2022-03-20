import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';


const WYThemeHeaderRCM = memo(function(props) {
  const {title, keywords} = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="javascript:void(null);">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <div display="inline-block">更多</div>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

WYThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

WYThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default WYThemeHeaderRCM;

