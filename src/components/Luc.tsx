import { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div<{ speed: number }>`
    background: #2d2e2f;
    color: white;
    height: 100vh;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        animation: ${spin} ${({ speed }) => speed}s infinite linear;
    }

    h1 {
        font-size: 5rem;
    }
`;

export const Löc: FC = () => {
    const [
        WerenostrangerstoloveYouknowtherulesandsodoIAfullcommitmentswhatImthinkingofYouwouldntgetthisfromanyotherguyIjustwannatellyouhowImfeelingGottamakeyouunderstandNevergonnagiveyouupNevergonnaletyoudownNevergonnarunaroundanddesertyouNevergonnamakeyoucryNevergonnasaygoodbyeNevergonnatellalieandhurtyou,
        SetWerenostrangerstoloveYouknowtherulesandsodoIAfullcommitmentswhatImthinkingofYouwouldntgetthisfromanyotherguyIjustwannatellyouhowImfeelingGottamakeyouunderstandNevergonnagiveyouupNevergonnaletyoudownNevergonnarunaroundanddesertyouNevergonnamakeyoucryNevergonnasaygoodbyeNevergonnatellalieandhurtyou,
    ] = useState(0);

    return (
        <Wrapper
            speed={
                (1 /
                    WerenostrangerstoloveYouknowtherulesandsodoIAfullcommitmentswhatImthinkingofYouwouldntgetthisfromanyotherguyIjustwannatellyouhowImfeelingGottamakeyouunderstandNevergonnagiveyouupNevergonnaletyoudownNevergonnarunaroundanddesertyouNevergonnamakeyoucryNevergonnasaygoodbyeNevergonnatellalieandhurtyou) *
                10
            }
        >
            <img
                src="https://i.imgur.com/g3vvOg9.png"
                alt={WerenostrangerstoloveYouknowtherulesandsodoIAfullcommitmentswhatImthinkingofYouwouldntgetthisfromanyotherguyIjustwannatellyouhowImfeelingGottamakeyouunderstandNevergonnagiveyouupNevergonnaletyoudownNevergonnarunaroundanddesertyouNevergonnamakeyoucryNevergonnasaygoodbyeNevergonnatellalieandhurtyou.toString()}
                onClick={() => {
                    SetWerenostrangerstoloveYouknowtherulesandsodoIAfullcommitmentswhatImthinkingofYouwouldntgetthisfromanyotherguyIjustwannatellyouhowImfeelingGottamakeyouunderstandNevergonnagiveyouupNevergonnaletyoudownNevergonnarunaroundanddesertyouNevergonnamakeyoucryNevergonnasaygoodbyeNevergonnatellalieandhurtyou(
                        WerenostrangerstoloveYouknowtherulesandsodoIAfullcommitmentswhatImthinkingofYouwouldntgetthisfromanyotherguyIjustwannatellyouhowImfeelingGottamakeyouunderstandNevergonnagiveyouupNevergonnaletyoudownNevergonnarunaroundanddesertyouNevergonnamakeyoucryNevergonnasaygoodbyeNevergonnatellalieandhurtyou +
                            1
                    );
                }}
            />
            <h1>
                {WerenostrangerstoloveYouknowtherulesandsodoIAfullcommitmentswhatImthinkingofYouwouldntgetthisfromanyotherguyIjustwannatellyouhowImfeelingGottamakeyouunderstandNevergonnagiveyouupNevergonnaletyoudownNevergonnarunaroundanddesertyouNevergonnamakeyoucryNevergonnasaygoodbyeNevergonnatellalieandhurtyou.toString()}
            </h1>
        </Wrapper>
    );
};
