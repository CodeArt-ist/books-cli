import React from 'react';
import { Text } from 'react-native';
import Layout from '../../components/Layout/Layout';

const Home = () => {
    return (
        <Layout search={true} title={"My Book List"}>
            <Text>Ana Sayfa</Text>
        </Layout>
    )
}

export default Home;