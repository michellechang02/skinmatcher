from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import os
import requests
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import time
 

def scrape_images():
    # Create a Google Images search URL

    # Set up the Chrome driver
    driver = webdriver.Chrome()

    with open('./products.json') as f:
        products = json.load(f)

    for product in products:
        if product["image_url"] is None:
            try:
                product_name = product["product_name"]
                search_url = f"https://www.google.com/search?q={product_name}&tbm=isch"
                driver.get(search_url)
                
                first_image = WebDriverWait(driver, 2).until(
                    EC.presence_of_element_located((By.XPATH, '//*[@id="dimg_17"]'))
                )

                image_url = first_image.get_attribute('src')
                
                product["image_url"] = image_url

                with open('./products.json', 'w') as f:
                    json.dump(products, f, indent=4)
                
                print(f"Image URL for {product_name}: {image_url}")
            except Exception as e:
                product["image_url"] = product["image_url"]
                print(e)

    driver.quit()

scrape_images()
