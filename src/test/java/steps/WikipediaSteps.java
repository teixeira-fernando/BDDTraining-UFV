package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class WikipediaSteps {

    private WebDriver driver;

    @Before
    public void before() {
        //System.setProperty("webdriver.chrome.driver", "C:\\selenium\\chromedriver2.exe");
        ChromeOptions options = new ChromeOptions();
        //options.addArguments("--headless");
        driver = new ChromeDriver(options);
        driver.navigate().to("http://en.wikipedia.org");
    }

    @After
    public void after() {
        driver.quit();
    }

    @Given("^Enter search term '(.*?)'$")
    public void searchFor(String searchTerm) {
        WebElement searchField = driver.findElement(By.id("searchInput"));
        searchField.sendKeys(searchTerm);
    }

    @When("^Do search$")
    public void clickSearchButton() {
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        searchButton.click();
    }

    @Then("^Multiple results are shown for '(.*?)'$")
    public void assertSingleResult(String searchResult) {
        //WebElement results = driver.findElement(By.cssSelector("div#mw-content-text.mw-content-ltr p"));
        WebElement results = driver.findElement(By.xpath("//*[@id=\"mw-content-text\"]/div[1]/p[1]"));

        String text = results.getText();
        Assert.assertTrue(results.getText().equals(searchResult));
        //Assert.assertTrue(results.getText().startsWith(searchResult));
    }
}

