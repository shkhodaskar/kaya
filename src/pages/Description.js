import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel } from '@material-ui/core';
import CustomButton from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

function Description() {

    const [checked, setChecked] = React.useState({
        checkedAgree: false
    })

    const [disabled,setDisabled] = React.useState(true)

    const handleChange = name => event => {
        setChecked({ ...checked, [name]: event.target.checked });
        setDisabled(!disabled)
        console.log(disabled);
    };

    return (
        <div className = "text-center">
            {/* you put Title here */}
            <h1>Pre-experiment instructions</h1>
            {/* you put Some Description here */}
            <p> <br/>Purpose and Procedure<br/>
                Thank you for taking part in this experiment. We are studying how users understand fertility self-tracking tools and algorithms. The experiment should take approximately 60 minutes to complete. [TODO: what the participant will do]
                You will see two versions of the same app, one after the other. There will be instructions for what to do. If you ever need to retrieve the instructions, just tap the (?) in the upper right corner:
                {/* <image> */}
                <br/>
                [ PROCEED ]
                <br/>Responses will be Confidential<br/>		
                All records from this study will be kept private. Your responses will not affect your current or future experience or relations with UCI. In addition, in any sort of report we might publish, we will not include any information that makes it possible to identify you. Research records will be stored securely, and only researchers will have access to the records.		
                <br/>Contacts and Questions<br/>	
                This survey is being conducted by the HAI lab in the Informatics Dept. at UCI. If you have any questions about this study, please feel free to contact the researchers at support@twitter.com.
            </p>
            
            <FormGroup>
                <FormControlLabel control={
                    <GreenCheckbox   checked={checked.checkedAgree} 
                                onChange={handleChange('checkedAgree')} 
                                value = 'checkedAgree' 
                                className = 'mx-2'
                    />
                }
                label="Do you agree with the statements above?"
                />
            </FormGroup>
            <Link to = "/login">
            <CustomButton   className="mb-2" 
                            variant="contained" 
                            color="primary" 
                            disabled={disabled}
            >
                START
            </CustomButton>
            </Link>
            
            
        </div>
    );
};

export default Description