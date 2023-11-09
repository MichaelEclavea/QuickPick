import React, { useState } from "react";
import {
  Body1,
  Button,
  Display,
  FluentProvider,
  LargeTitle,
  Spinner,
  Title1,
  Title3,
  webLightTheme,
} from "@fluentui/react-components";
import { BrainCircuit20Regular } from "@fluentui/react-icons";
import { randomNumberGenerator } from "../../utils/randomNumberGenerator";
import { requestFromApi } from "../../utils/api/generate";
import Card from "../../components/card/Card";
import ResultBar from "../../components/resultBar/ResultBar";
import styles from "./GameScreen.module.scss";

const GameScreen = ({ selectedGame }) => {
  const [results, setResults] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRandomGenerate = () => {
    let resultArray = randomNumberGenerator(
      selectedGame.min,
      selectedGame.max,
      selectedGame.resultNumCount
    );
    setResults([
      ...results,
      {
        gameData: selectedGame,
        resultArray: resultArray,
      },
    ]);
  };

  const handleAiGenerate = async () => {
    try {
      setIsProcessing(true);
      const data = await requestFromApi(selectedGame);
      setResults([
        ...results,
        {
          gameData: selectedGame,
          resultArray: data.numbers,
          reason: data.reason,
        },
      ]);
      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
      console.log(error);
    }
  };

  const handleClearResults = () => {
    setResults([]);
  };

  const renderTitleCard = () => (
    <Card
      className={styles.titleCardRoot}
      content={
        <Display style={{ color: selectedGame.color }}>
          {selectedGame.name}
        </Display>
      }
    />
  );

  const renderAiCard = () => (
    <Card
      content={
        <div className={styles.cardContentRoot}>
          <Title3>AI Generated</Title3>
          <Body1>
            Generate a random set of numbers based on the most common numbers
            drawn for this game.
          </Body1>
          <FluentProvider
            theme={webLightTheme}
            className={styles.providerWrapper}
          >
            {isProcessing ? (
              <Button>
                <Spinner size="tiny" label={"Processing..."} />
              </Button>
            ) : (
              <Button
                appearance="default"
                onClick={handleAiGenerate}
                icon={<BrainCircuit20Regular />}
              >
                AI-Generate
              </Button>
            )}
          </FluentProvider>
        </div>
      }
    />
  );

  const renderRandomCard = () => (
    <Card
      content={
        <div className={styles.cardContentRoot}>
          <Title3>Random Generated</Title3>
          <Body1>Generate a random set of numbers.</Body1>
          <FluentProvider
            theme={webLightTheme}
            className={styles.providerWrapper}
          >
            {isProcessing ? (
              <Button>
                <Spinner size="tiny" label={"Processing..."} />
              </Button>
            ) : (
              <Button onClick={handleRandomGenerate}>Generate</Button>
            )}
          </FluentProvider>
        </div>
      }
    />
  );

  const renderPrizeCard = () => (
    <div className={styles.prizeCardRoot}>
      <Card
        style={{
          backgroundColor: selectedGame.color,
          width: 'clamp(0%, 50%, 100%)'
        }}
        content={
          <div className={styles.cardContentRoot}>
            <Title1>Top Prize</Title1>
            <LargeTitle>{selectedGame.win}</LargeTitle>
          </div>
        }
      />
    </div>
  );

  const renderResultsCard = () => (
    <Card
      className={styles.resultsCardRoot}
      content={
        <div className={styles.cardResultRoot}>
          <div className={styles.titleWrapper}>
            {!!results.length ? (
              <>
                <Title3>Generated Numbers</Title3>
                <div>
                  <Button size="small" onClick={handleClearResults}>
                    Clear list
                  </Button>
                </div>
              </>
            ) : (
              <Title3>Results will show here...</Title3>
            )}
          </div>
          <div className={styles.resultsWrapper}>
            {results.map((result, index) => (
              <ResultBar
                key={index}
                gameData={result.gameData}
                resultArray={result.resultArray}
                reason={result?.reason}
              />
            ))}
          </div>
        </div>
      }
    />
  );

  const renderLeftColumn = () => (
    <>
      {renderTitleCard()}
      {renderAiCard()}
      {renderRandomCard()}
    </>
  );

  const renderRightColumn = () => (
    <>
      {renderPrizeCard()}
      {renderResultsCard()}
    </>
  );

  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        {selectedGame && renderLeftColumn()}
      </div>
      <div className={styles.rightColumn}>
        {selectedGame && renderRightColumn()}
      </div>
    </div>
  );
};

export default GameScreen;
