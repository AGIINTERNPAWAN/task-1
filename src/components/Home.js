import { Grid,Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import '../App.css';
import Amazon from '../assets/amazon.png';
import AWS1 from '../assets/aws-1.png';
import AWS2 from '../assets/aws-2.png';
import AWS3 from '../assets/aws-3.png';
import AWS4 from '../assets/aws-4.png';
import AWS5 from '../assets/aws-5.png';
import AWS6 from '../assets/aws-6.png';
import AWS7 from '../assets/aws-7.png';
import AWS8 from '../assets/aws-8.png';
import AWS9 from '../assets/aws-9.png';
import AWS10 from '../assets/aws-10.png';
import AWS11 from '../assets/aws-11.png';
import AWS12 from '../assets/aws-12.png';

export default function LandingPage(){
    return(
        <React.Fragment>
        <img src ={Amazon} className="img" alt="No Preview"/>
        <Typography variant="h4" className="home-heading">Our Web Services</Typography>
        <Grid container spacing={3} >
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS1} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon EC2</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS2} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon Lambda</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS3} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon RDS</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS4} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">AWS IoT Core</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS5} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon Cognito</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS6} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon Redshift</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS7} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Elastic Load Balancing </Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS8} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Elasticsearch Service</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS9} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon Simple Email Servie</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS10} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon Simple Queue Service</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS11} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon API Gateway</Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
        <CardContent>
        <img src ={AWS12} className="item" alt="No Preview"/>
        <Typography className="item-title" variant="h5" color="textSecondary" component="p">Amazon Kinesis Data Analytics</Typography>
      </CardContent>
      </Card>
        </Grid>
        </Grid>
        </React.Fragment>

    );
}