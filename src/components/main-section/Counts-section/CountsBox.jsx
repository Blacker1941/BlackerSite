import React from 'react';
import '../../../css/counts.css';

function CountsBox({Icon,number,p,strong}) {
  return (
    <>
    <i class="bi bi-award">
        {Icon}
    </i>
    <span data-purecounter-start="0" data-purecounter-end={number} data-purecounter-duration="0" class="purecounter">{number}</span>
    <p><strong>{strong}</strong>{p}</p>
    </>
  );
}

export default CountsBox;