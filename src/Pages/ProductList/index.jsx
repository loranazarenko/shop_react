import React from 'react';
import { Layout, Row, Col } from 'antd';
import {Card} from './Blocks/Card'

const { Header, Footer, Content } = Layout;

const data = [
    {
        id: 1,
        name: "шарик",
        image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
    },
    {
        id: 2,
        name: "футболка",
        image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
    },
    {
        id: 4,
        name: "шарик 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
    }
]
 

export const ProductList = () => {
    const RenderCards = (element) => (
        <Col span={4}>
            <Card el={element}/>
        </Col>
    )
    return (
        <Layout style={styles.layoutStyle}>
            <Header>Header</Header>
            <Content>
                <Row justify="space-around">
                    {data.map(el => RenderCards(el))}
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );

}

const styles = {
    layoutStyle: {
        minHeight: '100vh'
    }
}