package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

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
