import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, List, ListItem, Radio, Button, Icon } from 'native-base';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { pushNewRoute } from '../../actions/route';
import styles from './styles';
import myTheme from '../../themes/base-theme';
class Bears extends Component {

    static propTypes = {
        openDrawer: React.PropTypes.func,
        closeDrawer: React.PropTypes.func,
        pushNewRoute: React.PropTypes.func
    };

    constructor(props) {
        super(props);
    }
    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }

    items = [
        {
            name: 'Потапыч',
            selected: true,
            route: ()=>{this.pushNewRoute('bear-profile')}
        },
        {
            name: 'Копатыч',
            selected: false,
            route: ()=>{this.pushNewRoute('bear-profile')}
        },
        {
            name: 'Медведич',
            selected: false,
            route: ()=>{this.pushNewRoute('bear-profile')}
        }
    ];
    render() {
        return (
            <Container theme={myTheme} style={styles.container}>

                <Header>
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                    <Title>Примедведиться</Title>
                </Header>

                <Content>
                    <List dataArray={this.items}
                          renderRow={(item) =>
                            <ListItem button onPress={item.route}>
                                <Radio selected={item.selected} />
                                <Text>{item.name}</Text>
                            </ListItem>
                        }>
                    </List>
                    <Button style={styles.btn_search}>
                        <Icon name='ios-search' />
                        Найти
                    </Button>
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer()),
        pushNewRoute: route => dispatch(pushNewRoute(route))
    };
}

export default connect(null, bindAction)(Bears);
