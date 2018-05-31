package com.javasampleapproach.springbatch.step;
 
import org.springframework.batch.item.ItemProcessor;
 
public class Processor implements ItemProcessor<String, String>{
 
    @Override
    public String process(String content) throws Exception {
        return content.toUpperCase();
    }
 
}