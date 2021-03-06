import React from 'react';
import { Card, Grid, Divider, Button } from 'semantic-ui-react';


const styles = {
  pointer: { cursor: 'pointer' },
}

const extra = (
    <Button.Group>
      <Button className="positive">Song +</Button>
      <Button.Or />
      <Button>Delete</Button>
    </Button.Group>
)

const Chart = ({ id, name, updateChart, destroyChart, SongForm }) => (
  <Grid columns={3} relaxed>
    <Grid.Column>
      <Card
        image='client/src/assets/images/album-default.jpg'
        header = { `${name}` }
        description= {`${id}`}
        extra={extra}
        style={styles.pointer}
        onClick={ SongForm }
        />
    </Grid.Column>
  <Divider vertical></Divider>
    <Grid.Column>
      <Card
        image='/client/public/album-default.jpg'
        header= { `${name}` }
        description={ `${id}` }
        extra={extra}
        style={styles.pointer}
        onClick={() => updateChart(id) }
        />
    </Grid.Column>
  <Divider vertical></Divider>
    <Grid.Column>
      <Card
        image='/client/public/album-default.jpg'
        header= { `${name}` }
        description={ `${id}` }
        extra={extra}
        style={styles.pointer}
        onClick={() => updateChart(id) }
        />
    </Grid.Column>
  </Grid>
)




export default Chart;
