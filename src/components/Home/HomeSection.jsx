import React from 'react'
import { Container } from './HomeSection.elements'
import DishesList from "./DishesList"
import MenuStats from "./MenuStats"

const HomeSection = () => {
    return (
        <>
            <Container>
                <MenuStats />
                <DishesList />
            </Container>
        </>
    )
}

export default HomeSection
