package Utils;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class WebDriverUtils {

    public static boolean verifyElementAbsent(WebDriver driver, String locator) throws NoSuchElementException{
        try {
            driver.findElement(By.id(locator));
            return true;

        } catch (NoSuchElementException e) {
            return false;
        }
    }


}
