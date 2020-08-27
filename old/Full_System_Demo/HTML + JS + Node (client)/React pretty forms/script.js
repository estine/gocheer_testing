import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}


(function() {
	var	button, buttonWidth, pulse,
		pulseSize;

	init();
	
	function init() {
		button = document.querySelector('.button');		
		pulse = button.querySelector('.pulse');
		
		//we need to dynamically size 
		//our pulse element based on 
		//the size of the button.
		setPulseSize();
		
		//bind our click event
		button.addEventListener('click', onButtonClick, false);
		
	}
	
	function setPulseSize() {
		buttonWidth = button.offsetWidth;
		pulseSize = buttonWidth * 2 + 'px';

		//set the pulse size to double the button's width
		pulse.style.width = pulseSize;
		pulse.style.height = pulseSize;
		pulse.style.marginLeft = - buttonWidth + 'px';
		pulse.style.marginTop = - buttonWidth + 'px';		
	}
	
	function onButtonClick(e) {
		var r = button.getBoundingClientRect(),
			x = e.clientX - r.left,
			y = e.clientY - r.top;
		
		//the pulse will originate from where you click
		TweenMax.set(pulse, {
			x: x,
			y: y,
			scaleX: 0,
			scaleY: 0,
			opacity: 1
		});

		//grow the pulse eaaase out of it
		TweenMax.to(pulse, 1, {
			scaleX: 1,
			scaleY: 1,
			opacity: 0,
			ease: Quart.easeOut
		});	
	}
})();

